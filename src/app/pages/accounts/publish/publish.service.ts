import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublishService {
  constructor(private httpClient: HttpClient) {}

  async postOnTwitter(text) {
    console.log(text);
    var envio = await firstValueFrom(
      this.httpClient.post(
        'https://api.twitter.com/2/tweets',
        {
          text: text,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization:
              'OAuth oauth_consumer_key="EOO7UjWUEmHInrbvCzX28rZWK",oauth_token="1386177872142942213-c7fRpoBjn7Gy96jXc3s5FRbGapibpu",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1708728081",oauth_nonce="WEXLoylk8XK",oauth_version="1.0",oauth_signature="RrjeKLUv%2FYkuUQkoEGGMpiEg6mg%3D"',
          },
        }
      )
    );
    console.log(envio);
  }
}
