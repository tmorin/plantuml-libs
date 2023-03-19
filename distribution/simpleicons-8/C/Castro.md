# Castro


```text
simpleicons-8/C/Castro
```

```text
include('simpleicons-8/C/Castro')
```



| Illustration | Castro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Castro.png) | ![illustration for Castro](../../simpleicons-8/C/Castro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CastroXs>`
- `<$CastroSm>`
- `<$CastroMd>`
- `<$CastroLg>`





## Castro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Castro
include('simpleicons-8/C/Castro')

' renders the element
Castro('Castro', 'Castro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Castro
include('simpleicons-8/C/Castro')

' renders the element
Castro('Castro', 'Castro', 'an optional tech label', 'an optional description')
@enduml
```

