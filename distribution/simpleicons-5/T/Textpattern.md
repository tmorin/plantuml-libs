# Textpattern


```text
simpleicons-5/T/Textpattern
```

```text
include('simpleicons-5/T/Textpattern')
```



| Illustration | Textpattern |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Textpattern.png) | ![illustration for Textpattern](../../simpleicons-5/T/Textpattern.Local.png) |




## Textpattern

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Textpattern
include('simpleicons-5/T/Textpattern')

' renders the element
Textpattern('Textpattern', 'Textpattern', 'an optional tech label')
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

' loads the Item which embeds the element Textpattern
include('simpleicons-5/T/Textpattern')

' renders the element
Textpattern('Textpattern', 'Textpattern', 'an optional tech label')
@enduml
```

