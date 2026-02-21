# GooglePlay


```text
fontawesome/Brands/GooglePlay
```

```text
include('fontawesome/Brands/GooglePlay')
```



| Illustration | GooglePlay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GooglePlay.png) | ![illustration for GooglePlay](../../fontawesome/Brands/GooglePlay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglePlayXs>`
- `<$GooglePlaySm>`
- `<$GooglePlayMd>`
- `<$GooglePlayLg>`





## GooglePlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePlay
include('fontawesome/Brands/GooglePlay')

' renders the element
GooglePlay('GooglePlay', 'Google Play', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GooglePlay
include('fontawesome/Brands/GooglePlay')

' renders the element
GooglePlay('GooglePlay', 'Google Play', 'an optional tech label', 'an optional description')
@enduml
```

