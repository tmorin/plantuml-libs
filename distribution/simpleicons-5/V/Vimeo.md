# Vimeo


```text
simpleicons-5/V/Vimeo
```

```text
include('simpleicons-5/V/Vimeo')
```



| Illustration | Vimeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vimeo.png) | ![illustration for Vimeo](../../simpleicons-5/V/Vimeo.Local.png) |




## Vimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vimeo
include('simpleicons-5/V/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label')
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

' loads the Item which embeds the element Vimeo
include('simpleicons-5/V/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label')
@enduml
```

