# Alfaromeo


```text
simpleicons-14/A/Alfaromeo
```

```text
include('simpleicons-14/A/Alfaromeo')
```



| Illustration | Alfaromeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alfaromeo.png) | ![illustration for Alfaromeo](../../simpleicons-14/A/Alfaromeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlfaromeoXs>`
- `<$AlfaromeoSm>`
- `<$AlfaromeoMd>`
- `<$AlfaromeoLg>`





## Alfaromeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alfaromeo
include('simpleicons-14/A/Alfaromeo')

' renders the element
Alfaromeo('Alfaromeo', 'Alfaromeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alfaromeo
include('simpleicons-14/A/Alfaromeo')

' renders the element
Alfaromeo('Alfaromeo', 'Alfaromeo', 'an optional tech label', 'an optional description')
@enduml
```

