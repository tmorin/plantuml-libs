# Vimeo


```text
simpleicons-8/V/Vimeo
```

```text
include('simpleicons-8/V/Vimeo')
```



| Illustration | Vimeo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vimeo.png) | ![illustration for Vimeo](../../simpleicons-8/V/Vimeo.Local.png) |




## Vimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vimeo
include('simpleicons-8/V/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vimeo
include('simpleicons-8/V/Vimeo')

' renders the element
Vimeo('Vimeo', 'Vimeo', 'an optional tech label', 'an optional description')
@enduml
```

