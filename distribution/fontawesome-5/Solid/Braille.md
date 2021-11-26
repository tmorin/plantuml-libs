# Braille


```text
fontawesome-5/Solid/Braille
```

```text
include('fontawesome-5/Solid/Braille')
```



| Illustration | Braille |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Braille.png) | ![illustration for Braille](../../fontawesome-5/Solid/Braille.Local.png) |




## Braille

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Braille
include('fontawesome-5/Solid/Braille')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Braille
include('fontawesome-5/Solid/Braille')

' renders the element
Braille('Braille', 'Braille', 'an optional tech label')
@enduml
```

