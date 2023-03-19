# Bigbluebutton


```text
simpleicons-8/B/Bigbluebutton
```

```text
include('simpleicons-8/B/Bigbluebutton')
```



| Illustration | Bigbluebutton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bigbluebutton.png) | ![illustration for Bigbluebutton](../../simpleicons-8/B/Bigbluebutton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BigbluebuttonXs>`
- `<$BigbluebuttonSm>`
- `<$BigbluebuttonMd>`
- `<$BigbluebuttonLg>`





## Bigbluebutton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-8/B/Bigbluebutton')

' renders the element
Bigbluebutton('Bigbluebutton', 'Bigbluebutton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bigbluebutton
include('simpleicons-8/B/Bigbluebutton')

' renders the element
Bigbluebutton('Bigbluebutton', 'Bigbluebutton', 'an optional tech label', 'an optional description')
@enduml
```

