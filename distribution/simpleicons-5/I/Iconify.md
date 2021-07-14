# Iconify


```text
simpleicons-5/I/Iconify
```

```text
include('simpleicons-5/I/Iconify')
```



| Illustration | Iconify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Iconify.png) | ![illustration for Iconify](../../simpleicons-5/I/Iconify.Local.png) |




## Iconify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Iconify
include('simpleicons-5/I/Iconify')

' renders the element
Iconify('Iconify', 'Iconify', 'an optional tech label')
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

' loads the Item which embeds the element Iconify
include('simpleicons-5/I/Iconify')

' renders the element
Iconify('Iconify', 'Iconify', 'an optional tech label')
@enduml
```

