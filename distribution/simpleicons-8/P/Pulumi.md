# Pulumi


```text
simpleicons-8/P/Pulumi
```

```text
include('simpleicons-8/P/Pulumi')
```



| Illustration | Pulumi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pulumi.png) | ![illustration for Pulumi](../../simpleicons-8/P/Pulumi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PulumiXs>`
- `<$PulumiSm>`
- `<$PulumiMd>`
- `<$PulumiLg>`





## Pulumi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pulumi
include('simpleicons-8/P/Pulumi')

' renders the element
Pulumi('Pulumi', 'Pulumi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pulumi
include('simpleicons-8/P/Pulumi')

' renders the element
Pulumi('Pulumi', 'Pulumi', 'an optional tech label', 'an optional description')
@enduml
```

