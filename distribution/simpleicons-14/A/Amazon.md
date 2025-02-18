# Amazon


```text
simpleicons-14/A/Amazon
```

```text
include('simpleicons-14/A/Amazon')
```



| Illustration | Amazon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazon.png) | ![illustration for Amazon](../../simpleicons-14/A/Amazon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonXs>`
- `<$AmazonSm>`
- `<$AmazonMd>`
- `<$AmazonLg>`





## Amazon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazon
include('simpleicons-14/A/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazon
include('simpleicons-14/A/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label', 'an optional description')
@enduml
```

