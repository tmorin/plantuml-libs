# Bitcoin


```text
simpleicons-7/B/Bitcoin
```

```text
include('simpleicons-7/B/Bitcoin')
```



| Illustration | Bitcoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bitcoin.png) | ![illustration for Bitcoin](../../simpleicons-7/B/Bitcoin.Local.png) |




## Bitcoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bitcoin
include('simpleicons-7/B/Bitcoin')

' renders the element
Bitcoin('Bitcoin', 'Bitcoin', 'an optional tech label')
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

' loads the Item which embeds the element Bitcoin
include('simpleicons-7/B/Bitcoin')

' renders the element
Bitcoin('Bitcoin', 'Bitcoin', 'an optional tech label')
@enduml
```

