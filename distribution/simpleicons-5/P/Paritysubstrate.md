# Paritysubstrate


```text
simpleicons-5/P/Paritysubstrate
```

```text
include('simpleicons-5/P/Paritysubstrate')
```



| Illustration | Paritysubstrate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Paritysubstrate.png) | ![illustration for Paritysubstrate](../../simpleicons-5/P/Paritysubstrate.Local.png) |




## Paritysubstrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paritysubstrate
include('simpleicons-5/P/Paritysubstrate')

' renders the element
Paritysubstrate('Paritysubstrate', 'Paritysubstrate', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paritysubstrate
include('simpleicons-5/P/Paritysubstrate')

' renders the element
Paritysubstrate('Paritysubstrate', 'Paritysubstrate', 'an optional tech label')
@enduml
```

