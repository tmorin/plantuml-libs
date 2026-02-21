# Sleigh


```text
fontawesome/Solid/Sleigh
```

```text
include('fontawesome/Solid/Sleigh')
```



| Illustration | Sleigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sleigh.png) | ![illustration for Sleigh](../../fontawesome/Solid/Sleigh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SleighXs>`
- `<$SleighSm>`
- `<$SleighMd>`
- `<$SleighLg>`





## Sleigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sleigh
include('fontawesome/Solid/Sleigh')

' renders the element
Sleigh('Sleigh', 'Sleigh', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sleigh
include('fontawesome/Solid/Sleigh')

' renders the element
Sleigh('Sleigh', 'Sleigh', 'an optional tech label', 'an optional description')
@enduml
```

