# Polkadot


```text
simpleicons-7/P/Polkadot
```

```text
include('simpleicons-7/P/Polkadot')
```



| Illustration | Polkadot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Polkadot.png) | ![illustration for Polkadot](../../simpleicons-7/P/Polkadot.Local.png) |




## Polkadot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Polkadot
include('simpleicons-7/P/Polkadot')

' renders the element
Polkadot('Polkadot', 'Polkadot', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Polkadot
include('simpleicons-7/P/Polkadot')

' renders the element
Polkadot('Polkadot', 'Polkadot', 'an optional tech label', 'an optional description')
@enduml
```

