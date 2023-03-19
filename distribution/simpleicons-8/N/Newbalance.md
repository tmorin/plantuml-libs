# Newbalance


```text
simpleicons-8/N/Newbalance
```

```text
include('simpleicons-8/N/Newbalance')
```



| Illustration | Newbalance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Newbalance.png) | ![illustration for Newbalance](../../simpleicons-8/N/Newbalance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewbalanceXs>`
- `<$NewbalanceSm>`
- `<$NewbalanceMd>`
- `<$NewbalanceLg>`





## Newbalance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Newbalance
include('simpleicons-8/N/Newbalance')

' renders the element
Newbalance('Newbalance', 'Newbalance', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Newbalance
include('simpleicons-8/N/Newbalance')

' renders the element
Newbalance('Newbalance', 'Newbalance', 'an optional tech label', 'an optional description')
@enduml
```

