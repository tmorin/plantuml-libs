# Cloudflare


```text
simpleicons-5/C/Cloudflare
```

```text
include('simpleicons-5/C/Cloudflare')
```



| Illustration | Cloudflare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cloudflare.png) | ![illustration for Cloudflare](../../simpleicons-5/C/Cloudflare.Local.png) |




## Cloudflare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cloudflare
include('simpleicons-5/C/Cloudflare')

' renders the element
Cloudflare('Cloudflare', 'Cloudflare', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cloudflare
include('simpleicons-5/C/Cloudflare')

' renders the element
Cloudflare('Cloudflare', 'Cloudflare', 'an optional tech label')
@enduml
```

