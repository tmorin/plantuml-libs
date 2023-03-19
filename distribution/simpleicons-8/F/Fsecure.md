# Fsecure


```text
simpleicons-8/F/Fsecure
```

```text
include('simpleicons-8/F/Fsecure')
```



| Illustration | Fsecure |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fsecure.png) | ![illustration for Fsecure](../../simpleicons-8/F/Fsecure.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FsecureXs>`
- `<$FsecureSm>`
- `<$FsecureMd>`
- `<$FsecureLg>`





## Fsecure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fsecure
include('simpleicons-8/F/Fsecure')

' renders the element
Fsecure('Fsecure', 'Fsecure', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fsecure
include('simpleicons-8/F/Fsecure')

' renders the element
Fsecure('Fsecure', 'Fsecure', 'an optional tech label', 'an optional description')
@enduml
```

