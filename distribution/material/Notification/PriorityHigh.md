# PriorityHigh


```text
material/Notification/PriorityHigh
```

```text
include('material/Notification/PriorityHigh')
```



| Illustration | PriorityHigh |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PriorityHigh.png) | ![illustration for PriorityHigh](../../material/Notification/PriorityHigh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PriorityHighXs>`
- `<$PriorityHighSm>`
- `<$PriorityHighMd>`
- `<$PriorityHighLg>`





## PriorityHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PriorityHigh
include('material/Notification/PriorityHigh')

' renders the element
PriorityHigh('PriorityHigh', 'Priority High', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PriorityHigh
include('material/Notification/PriorityHigh')

' renders the element
PriorityHigh('PriorityHigh', 'Priority High', 'an optional tech label', 'an optional description')
@enduml
```

