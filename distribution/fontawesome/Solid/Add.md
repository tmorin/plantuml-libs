# Add


```text
fontawesome/Solid/Add
```

```text
include('fontawesome/Solid/Add')
```



| Illustration | Add |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Add.png) | ![illustration for Add](../../fontawesome/Solid/Add.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddXs>`
- `<$AddSm>`
- `<$AddMd>`
- `<$AddLg>`





## Add

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Add
include('fontawesome/Solid/Add')

' renders the element
Add('Add', 'Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Add
include('fontawesome/Solid/Add')

' renders the element
Add('Add', 'Add', 'an optional tech label', 'an optional description')
@enduml
```

