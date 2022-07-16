# Starbucks


```text
simpleicons-7/S/Starbucks
```

```text
include('simpleicons-7/S/Starbucks')
```



| Illustration | Starbucks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Starbucks.png) | ![illustration for Starbucks](../../simpleicons-7/S/Starbucks.Local.png) |




## Starbucks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Starbucks
include('simpleicons-7/S/Starbucks')

' renders the element
Starbucks('Starbucks', 'Starbucks', 'an optional tech label')
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

' loads the Item which embeds the element Starbucks
include('simpleicons-7/S/Starbucks')

' renders the element
Starbucks('Starbucks', 'Starbucks', 'an optional tech label')
@enduml
```

