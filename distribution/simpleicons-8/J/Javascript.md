# Javascript


```text
simpleicons-8/J/Javascript
```

```text
include('simpleicons-8/J/Javascript')
```



| Illustration | Javascript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Javascript.png) | ![illustration for Javascript](../../simpleicons-8/J/Javascript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JavascriptXs>`
- `<$JavascriptSm>`
- `<$JavascriptMd>`
- `<$JavascriptLg>`





## Javascript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Javascript
include('simpleicons-8/J/Javascript')

' renders the element
Javascript('Javascript', 'Javascript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Javascript
include('simpleicons-8/J/Javascript')

' renders the element
Javascript('Javascript', 'Javascript', 'an optional tech label', 'an optional description')
@enduml
```

