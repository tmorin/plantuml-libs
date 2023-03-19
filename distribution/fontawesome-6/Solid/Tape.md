# Tape


```text
fontawesome-6/Solid/Tape
```

```text
include('fontawesome-6/Solid/Tape')
```



| Illustration | Tape |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tape.png) | ![illustration for Tape](../../fontawesome-6/Solid/Tape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TapeXs>`
- `<$TapeSm>`
- `<$TapeMd>`
- `<$TapeLg>`





## Tape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tape
include('fontawesome-6/Solid/Tape')

' renders the element
Tape('Tape', 'Tape', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tape
include('fontawesome-6/Solid/Tape')

' renders the element
Tape('Tape', 'Tape', 'an optional tech label', 'an optional description')
@enduml
```

