# Buzzfeed


```text
simpleicons-6/B/Buzzfeed
```

```text
include('simpleicons-6/B/Buzzfeed')
```



| Illustration | Buzzfeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Buzzfeed.png) | ![illustration for Buzzfeed](../../simpleicons-6/B/Buzzfeed.Local.png) |




## Buzzfeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Buzzfeed
include('simpleicons-6/B/Buzzfeed')

' renders the element
Buzzfeed('Buzzfeed', 'Buzzfeed', 'an optional tech label')
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

' loads the Item which embeds the element Buzzfeed
include('simpleicons-6/B/Buzzfeed')

' renders the element
Buzzfeed('Buzzfeed', 'Buzzfeed', 'an optional tech label')
@enduml
```

