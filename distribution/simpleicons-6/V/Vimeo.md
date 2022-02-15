# Vimeo


```text
simpleicons-6/V/Vimeo
```

```text
include('simpleicons-6/V/Vimeo')
```



| Illustration | Vimeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vimeo.png) | ![illustration for Vimeo](../../simpleicons-6/V/Vimeo.Local.png) |




## Vimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vimeo
include('simpleicons-6/V/Vimeo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vimeo
include('simpleicons-6/V/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label')
@enduml
```

