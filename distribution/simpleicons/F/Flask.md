# Flask


```text
simpleicons/F/Flask
```

```text
include('simpleicons/F/Flask')
```



| Illustration | Flask |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flask.png) | ![illustration for Flask](../../simpleicons/F/Flask.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlaskXs>`
- `<$FlaskSm>`
- `<$FlaskMd>`
- `<$FlaskLg>`





## Flask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flask
include('simpleicons/F/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flask
include('simpleicons/F/Flask')

' renders the element
Flask('Flask', 'Flask', 'an optional tech label', 'an optional description')
@enduml
```

