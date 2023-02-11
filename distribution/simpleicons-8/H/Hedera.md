# Hedera


```text
simpleicons-8/H/Hedera
```

```text
include('simpleicons-8/H/Hedera')
```



| Illustration | Hedera |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hedera.png) | ![illustration for Hedera](../../simpleicons-8/H/Hedera.Local.png) |




## Hedera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hedera
include('simpleicons-8/H/Hedera')

' renders the element
Hedera('Hedera', 'Hedera', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hedera
include('simpleicons-8/H/Hedera')

' renders the element
Hedera('Hedera', 'Hedera', 'an optional tech label', 'an optional description')
@enduml
```

