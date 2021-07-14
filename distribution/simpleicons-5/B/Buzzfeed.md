# Buzzfeed


```text
simpleicons-5/B/Buzzfeed
```

```text
include('simpleicons-5/B/Buzzfeed')
```



| Illustration | Buzzfeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Buzzfeed.png) | ![illustration for Buzzfeed](../../simpleicons-5/B/Buzzfeed.Local.png) |




## Buzzfeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Buzzfeed
include('simpleicons-5/B/Buzzfeed')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Buzzfeed
include('simpleicons-5/B/Buzzfeed')

' renders the element
Buzzfeed('Buzzfeed', 'Buzzfeed', 'an optional tech label')
@enduml
```

