# Reply


```text
material/Content/Reply
```

```text
include('material/Content/Reply')
```



| Illustration | Reply |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Reply.png) | ![illustration for Reply](../../material/Content/Reply.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplyXs>`
- `<$ReplySm>`
- `<$ReplyMd>`
- `<$ReplyLg>`





## Reply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Reply
include('material/Content/Reply')

' renders the element
Reply('Reply', 'Reply', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reply
include('material/Content/Reply')

' renders the element
Reply('Reply', 'Reply', 'an optional tech label', 'an optional description')
@enduml
```

