# More


```text
material/Notification/More
```

```text
include('material/Notification/More')
```



| Illustration | More |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/More.png) | ![illustration for More](../../material/Notification/More.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoreXs>`
- `<$MoreSm>`
- `<$MoreMd>`
- `<$MoreLg>`





## More

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element More
include('material/Notification/More')

' renders the element
More('More', 'More', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element More
include('material/Notification/More')

' renders the element
More('More', 'More', 'an optional tech label', 'an optional description')
@enduml
```

