# Letsencrypt


```text
simpleicons-8/L/Letsencrypt
```

```text
include('simpleicons-8/L/Letsencrypt')
```



| Illustration | Letsencrypt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Letsencrypt.png) | ![illustration for Letsencrypt](../../simpleicons-8/L/Letsencrypt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LetsencryptXs>`
- `<$LetsencryptSm>`
- `<$LetsencryptMd>`
- `<$LetsencryptLg>`





## Letsencrypt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Letsencrypt
include('simpleicons-8/L/Letsencrypt')

' renders the element
Letsencrypt('Letsencrypt', 'Letsencrypt', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Letsencrypt
include('simpleicons-8/L/Letsencrypt')

' renders the element
Letsencrypt('Letsencrypt', 'Letsencrypt', 'an optional tech label', 'an optional description')
@enduml
```

