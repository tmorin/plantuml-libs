# Actualbudget


```text
simpleicons/A/Actualbudget
```

```text
include('simpleicons/A/Actualbudget')
```



| Illustration | Actualbudget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Actualbudget.png) | ![illustration for Actualbudget](../../simpleicons/A/Actualbudget.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ActualbudgetXs>`
- `<$ActualbudgetSm>`
- `<$ActualbudgetMd>`
- `<$ActualbudgetLg>`





## Actualbudget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Actualbudget
include('simpleicons/A/Actualbudget')

' renders the element
Actualbudget('Actualbudget', 'Actualbudget', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Actualbudget
include('simpleicons/A/Actualbudget')

' renders the element
Actualbudget('Actualbudget', 'Actualbudget', 'an optional tech label', 'an optional description')
@enduml
```

