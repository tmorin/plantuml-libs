# Buffer


```text
simpleicons-8/B/Buffer
```

```text
include('simpleicons-8/B/Buffer')
```



| Illustration | Buffer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Buffer.png) | ![illustration for Buffer](../../simpleicons-8/B/Buffer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BufferXs>`
- `<$BufferSm>`
- `<$BufferMd>`
- `<$BufferLg>`





## Buffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Buffer
include('simpleicons-8/B/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buffer
include('simpleicons-8/B/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label', 'an optional description')
@enduml
```

