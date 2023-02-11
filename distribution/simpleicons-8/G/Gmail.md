# Gmail


```text
simpleicons-8/G/Gmail
```

```text
include('simpleicons-8/G/Gmail')
```



| Illustration | Gmail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gmail.png) | ![illustration for Gmail](../../simpleicons-8/G/Gmail.Local.png) |




## Gmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gmail
include('simpleicons-8/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gmail
include('simpleicons-8/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label', 'an optional description')
@enduml
```

