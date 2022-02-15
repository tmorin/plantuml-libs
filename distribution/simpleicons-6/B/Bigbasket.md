# Bigbasket


```text
simpleicons-6/B/Bigbasket
```

```text
include('simpleicons-6/B/Bigbasket')
```



| Illustration | Bigbasket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bigbasket.png) | ![illustration for Bigbasket](../../simpleicons-6/B/Bigbasket.Local.png) |




## Bigbasket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bigbasket
include('simpleicons-6/B/Bigbasket')

' renders the element
Bigbasket('Bigbasket', 'Bigbasket', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bigbasket
include('simpleicons-6/B/Bigbasket')

' renders the element
Bigbasket('Bigbasket', 'Bigbasket', 'an optional tech label')
@enduml
```

