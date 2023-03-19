# Copyright


```text
fontawesome-6/Solid/Copyright
```

```text
include('fontawesome-6/Solid/Copyright')
```



| Illustration | Copyright |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Copyright.png) | ![illustration for Copyright](../../fontawesome-6/Solid/Copyright.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CopyrightXs>`
- `<$CopyrightSm>`
- `<$CopyrightMd>`
- `<$CopyrightLg>`





## Copyright

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Copyright
include('fontawesome-6/Solid/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Copyright
include('fontawesome-6/Solid/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label', 'an optional description')
@enduml
```

