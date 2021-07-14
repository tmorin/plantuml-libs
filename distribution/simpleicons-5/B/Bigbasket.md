# Bigbasket


```text
simpleicons-5/B/Bigbasket
```

```text
include('simpleicons-5/B/Bigbasket')
```



| Illustration | Bigbasket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bigbasket.png) | ![illustration for Bigbasket](../../simpleicons-5/B/Bigbasket.Local.png) |




## Bigbasket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bigbasket
include('simpleicons-5/B/Bigbasket')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bigbasket
include('simpleicons-5/B/Bigbasket')

' renders the element
Bigbasket('Bigbasket', 'Bigbasket', 'an optional tech label')
@enduml
```

