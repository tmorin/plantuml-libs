# First


```text
simpleicons-14/F/First
```

```text
include('simpleicons-14/F/First')
```



| Illustration | First |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/First.png) | ![illustration for First](../../simpleicons-14/F/First.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirstXs>`
- `<$FirstSm>`
- `<$FirstMd>`
- `<$FirstLg>`





## First

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element First
include('simpleicons-14/F/First')

' renders the element
First('First', 'First', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element First
include('simpleicons-14/F/First')

' renders the element
First('First', 'First', 'an optional tech label', 'an optional description')
@enduml
```

