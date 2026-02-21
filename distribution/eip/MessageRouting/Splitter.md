# Splitter


```text
eip/MessageRouting/Splitter
```

```text
include('eip/MessageRouting/Splitter')
```



| Illustration | Splitter | SplitterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageRouting/Splitter.png) | ![illustration for Splitter](../../eip/MessageRouting/Splitter.Local.png) | ![illustration for SplitterGroup](../../eip/MessageRouting/SplitterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SplitterXs>`
- `<$SplitterSm>`
- `<$SplitterMd>`
- `<$SplitterLg>`





## Splitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element Splitter
include('eip/MessageRouting/Splitter')

' renders the element
Splitter('Splitter', 'Splitter', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element Splitter
include('eip/MessageRouting/Splitter')

' renders the element
Splitter('Splitter', 'Splitter', 'an optional tech label', 'an optional description')
@enduml
```

## SplitterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element SplitterGroup
include('eip/MessageRouting/Splitter')

' renders the element
SplitterGroup('SplitterGroup', 'Splitter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('eip/bootstrap')

' loads the Item which embeds the element SplitterGroup
include('eip/MessageRouting/Splitter')

' renders the element
SplitterGroup('SplitterGroup', 'Splitter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

