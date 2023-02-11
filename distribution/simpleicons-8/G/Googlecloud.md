# Googlecloud


```text
simpleicons-8/G/Googlecloud
```

```text
include('simpleicons-8/G/Googlecloud')
```



| Illustration | Googlecloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googlecloud.png) | ![illustration for Googlecloud](../../simpleicons-8/G/Googlecloud.Local.png) |




## Googlecloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googlecloud
include('simpleicons-8/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlecloud
include('simpleicons-8/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label', 'an optional description')
@enduml
```

