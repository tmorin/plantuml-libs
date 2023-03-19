# CaretUp


```text
fontawesome-6/Solid/CaretUp
```

```text
include('fontawesome-6/Solid/CaretUp')
```



| Illustration | CaretUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CaretUp.png) | ![illustration for CaretUp](../../fontawesome-6/Solid/CaretUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretUpXs>`
- `<$CaretUpSm>`
- `<$CaretUpMd>`
- `<$CaretUpLg>`





## CaretUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CaretUp
include('fontawesome-6/Solid/CaretUp')

' renders the element
CaretUp('CaretUp', 'Caret Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretUp
include('fontawesome-6/Solid/CaretUp')

' renders the element
CaretUp('CaretUp', 'Caret Up', 'an optional tech label', 'an optional description')
@enduml
```

