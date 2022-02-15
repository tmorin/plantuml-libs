# Buffer


```text
simpleicons-6/B/Buffer
```

```text
include('simpleicons-6/B/Buffer')
```



| Illustration | Buffer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Buffer.png) | ![illustration for Buffer](../../simpleicons-6/B/Buffer.Local.png) |




## Buffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Buffer
include('simpleicons-6/B/Buffer')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Buffer
include('simpleicons-6/B/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label')
@enduml
```

