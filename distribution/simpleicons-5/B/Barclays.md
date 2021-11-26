# Barclays


```text
simpleicons-5/B/Barclays
```

```text
include('simpleicons-5/B/Barclays')
```



| Illustration | Barclays |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Barclays.png) | ![illustration for Barclays](../../simpleicons-5/B/Barclays.Local.png) |




## Barclays

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Barclays
include('simpleicons-5/B/Barclays')

' renders the element
Barclays('Barclays', 'Barclays', 'an optional tech label')
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

' loads the Item which embeds the element Barclays
include('simpleicons-5/B/Barclays')

' renders the element
Barclays('Barclays', 'Barclays', 'an optional tech label')
@enduml
```

