# Curl


```text
simpleicons-14/C/Curl
```

```text
include('simpleicons-14/C/Curl')
```



| Illustration | Curl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Curl.png) | ![illustration for Curl](../../simpleicons-14/C/Curl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CurlXs>`
- `<$CurlSm>`
- `<$CurlMd>`
- `<$CurlLg>`





## Curl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Curl
include('simpleicons-14/C/Curl')

' renders the element
Curl('Curl', 'Curl', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Curl
include('simpleicons-14/C/Curl')

' renders the element
Curl('Curl', 'Curl', 'an optional tech label', 'an optional description')
@enduml
```

