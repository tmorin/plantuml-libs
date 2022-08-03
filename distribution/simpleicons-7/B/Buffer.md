# Buffer


```text
simpleicons-7/B/Buffer
```

```text
include('simpleicons-7/B/Buffer')
```



| Illustration | Buffer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Buffer.png) | ![illustration for Buffer](../../simpleicons-7/B/Buffer.Local.png) |




## Buffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Buffer
include('simpleicons-7/B/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Buffer
include('simpleicons-7/B/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label')
@enduml
```
