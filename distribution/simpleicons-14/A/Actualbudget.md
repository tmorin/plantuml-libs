# Actualbudget


```text
simpleicons-14/A/Actualbudget
```

```text
include('simpleicons-14/A/Actualbudget')
```



| Illustration | Actualbudget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Actualbudget.png) | ![illustration for Actualbudget](../../simpleicons-14/A/Actualbudget.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Actualbudget
include('simpleicons-14/A/Actualbudget')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Actualbudget
include('simpleicons-14/A/Actualbudget')

' renders the element
Actualbudget('Actualbudget', 'Actualbudget', 'an optional tech label', 'an optional description')
@enduml
```

