# Gmail


```text
simpleicons-5/G/Gmail
```

```text
include('simpleicons-5/G/Gmail')
```



| Illustration | Gmail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gmail.png) | ![illustration for Gmail](../../simpleicons-5/G/Gmail.Local.png) |




## Gmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gmail
include('simpleicons-5/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label')
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

' loads the Item which embeds the element Gmail
include('simpleicons-5/G/Gmail')

' renders the element
Gmail('Gmail', 'Gmail', 'an optional tech label')
@enduml
```

