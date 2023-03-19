# Copy


```text
fontawesome-6/Solid/Copy
```

```text
include('fontawesome-6/Solid/Copy')
```



| Illustration | Copy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Copy.png) | ![illustration for Copy](../../fontawesome-6/Solid/Copy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CopyXs>`
- `<$CopySm>`
- `<$CopyMd>`
- `<$CopyLg>`





## Copy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Copy
include('fontawesome-6/Solid/Copy')

' renders the element
Copy('Copy', 'Copy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Copy
include('fontawesome-6/Solid/Copy')

' renders the element
Copy('Copy', 'Copy', 'an optional tech label', 'an optional description')
@enduml
```

