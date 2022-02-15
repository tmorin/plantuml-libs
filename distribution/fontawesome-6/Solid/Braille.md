# Braille


```text
fontawesome-6/Solid/Braille
```

```text
include('fontawesome-6/Solid/Braille')
```



| Illustration | Braille |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Braille.png) | ![illustration for Braille](../../fontawesome-6/Solid/Braille.Local.png) |




## Braille

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Braille
include('fontawesome-6/Solid/Braille')

' renders the element
Braille('Braille', 'Braille', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Braille
include('fontawesome-6/Solid/Braille')

' renders the element
Braille('Braille', 'Braille', 'an optional tech label')
@enduml
```

