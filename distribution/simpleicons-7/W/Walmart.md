# Walmart


```text
simpleicons-7/W/Walmart
```

```text
include('simpleicons-7/W/Walmart')
```



| Illustration | Walmart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Walmart.png) | ![illustration for Walmart](../../simpleicons-7/W/Walmart.Local.png) |




## Walmart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Walmart
include('simpleicons-7/W/Walmart')

' renders the element
Walmart('Walmart', 'Walmart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Walmart
include('simpleicons-7/W/Walmart')

' renders the element
Walmart('Walmart', 'Walmart', 'an optional tech label', 'an optional description')
@enduml
```

