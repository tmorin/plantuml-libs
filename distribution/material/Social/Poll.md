# Poll


```text
material/Social/Poll
```

```text
include('material/Social/Poll')
```



| Illustration | Poll |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Poll.png) | ![illustration for Poll](../../material/Social/Poll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PollXs>`
- `<$PollSm>`
- `<$PollMd>`
- `<$PollLg>`





## Poll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Poll
include('material/Social/Poll')

' renders the element
Poll('Poll', 'Poll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poll
include('material/Social/Poll')

' renders the element
Poll('Poll', 'Poll', 'an optional tech label', 'an optional description')
@enduml
```

