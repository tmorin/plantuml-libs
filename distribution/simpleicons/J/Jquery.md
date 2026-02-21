# Jquery


```text
simpleicons/J/Jquery
```

```text
include('simpleicons/J/Jquery')
```



| Illustration | Jquery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jquery.png) | ![illustration for Jquery](../../simpleicons/J/Jquery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JqueryXs>`
- `<$JquerySm>`
- `<$JqueryMd>`
- `<$JqueryLg>`





## Jquery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jquery
include('simpleicons/J/Jquery')

' renders the element
Jquery('Jquery', 'Jquery', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jquery
include('simpleicons/J/Jquery')

' renders the element
Jquery('Jquery', 'Jquery', 'an optional tech label', 'an optional description')
@enduml
```

