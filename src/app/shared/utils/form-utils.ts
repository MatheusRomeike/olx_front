export const applyColumn = (
  id: string,
  columnSize: number | string,
  columnSizeMd?: number | null | string,
  columnSizeLg?: number | null | string
) => {
  if (!id) {
    throw new Error('[app-input] id é obrigatório');
  }

  const inputElement = document.getElementById(id);
  let el = inputElement;

  if (!inputElement) return;

  if (inputElement!!.closest('.form-group')) {
    el = inputElement!!.closest('.form-group');
  }

  el!!.parentElement!!.classList.add(
    'col' + (columnSize == 'col' ? '' : '-' + columnSize)
  );

  if (columnSizeMd)
    el!!.parentElement!!.classList.add(
      'col' + (columnSizeMd == 'col' ? '' : '-md-' + columnSizeMd)
    );

  if (columnSizeLg)
    el!!.parentElement!!.classList.add(
      'col' + (columnSizeLg == 'col' ? '' : '-lg-' + columnSizeLg)
    );
};

export const applyFlexAlignment = (
  id: string,
  alignItems: string,
  justifyContent: string
) => {
  if (!id) {
    throw new Error('[app-input] id é obrigatório');
  }

  const element = document.getElementById(id);
  if (element) {
    element!!.parentElement!!.style.alignItems = alignItems;
    element!!.parentElement!!.style.justifyContent = justifyContent;
    element!!.parentElement!!.style.display = 'flex';
  }
};
