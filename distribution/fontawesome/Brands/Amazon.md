# Amazon


```text
fontawesome/Brands/Amazon
```

```text
include('fontawesome/Brands/Amazon')
```



| Illustration | Amazon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Amazon.png) | ![illustration for Amazon](../../fontawesome/Brands/Amazon.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Amazon
include('fontawesome/Brands/Amazon')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Amazon
include('fontawesome/Brands/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label', 'an optional description')
@enduml
```

